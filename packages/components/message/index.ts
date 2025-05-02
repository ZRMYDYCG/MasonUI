import type { VNode } from 'vue'
import type { MessageOptions, MessageType } from './src/type'
import { useNamespace } from '@mason-ui/hooks'
import { createVNode, render, TransitionGroup } from 'vue'
import MessageComponent from './src/message.vue'

let seed = 1
const instances: VNode[] = []

const ns = useNamespace('message')

class MessageManager {
  private container: HTMLElement | null = null

  constructor() {
    this.container = document.createElement('div')
    this.container.className = ns.b()
    document.body.appendChild(this.container)
  }

  private render() {
    const vnodes = instances.map((instance) => {
      return createVNode(
        MessageComponent,
        {
          ...instance.props,
          onClose: () => this.remove(instance),
        },
        instance.children,
      )
    })

    const transitionGroup = createVNode(
      TransitionGroup,
      {
        name: 'message-list',
        tag: 'div',
        class: 'message-wrapper',
        onAfterLeave: () => {
          if (this.container && this.container.children.length === 0) {
            document.body.removeChild(this.container)
            this.container = null
          }
        },
      },
      () => vnodes,
    )

    if (!this.container) {
      this.container = document.createElement('div')
      this.container.className = ns.b()
      document.body.appendChild(this.container)
    }
    render(transitionGroup, this.container)
  }

  add(options: MessageOptions) {
    const id = `message_${seed++}`

    const vnode = createVNode(
      MessageComponent,
      {
        // 合并默认值
        duration: 3000,
        ...options,
        key: id,
        onClose: () => this.remove(vnode),
      },
      () => options.content,
    )

    instances.unshift(vnode)
    this.render()
    return id
  }

  remove(vnode: VNode) {
    const index = instances.indexOf(vnode)
    if (index > -1) {
      instances.splice(index, 1)
      this.render()
    }
  }
}

const manager = new MessageManager()

export const Message = {
  success(arg: string | MessageOptions, duration?: number) {
    return handleMessage('success', arg, duration)
  },

  error(arg: string | MessageOptions, duration?: number) {
    return handleMessage('error', arg, duration)
  },

  info(arg: string | MessageOptions, duration?: number) {
    return handleMessage('info', arg, duration)
  },

  warning(arg: string | MessageOptions, duration?: number) {
    return handleMessage('warning', arg, duration)
  },
}

function handleMessage(
  type: MessageType,
  arg: string | MessageOptions,
  duration?: number,
): string {
  const options = typeof arg === 'string'
    ? { content: arg, duration }
    : arg

  return manager.add({
    ...options,
    type,
  })
}
