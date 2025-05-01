import type { VNode } from 'vue'
import type { MessageOptions } from './src/type'
import { createVNode, render, TransitionGroup } from 'vue'
import MessageComponent from './src/message.vue'

let seed = 1
const instances: VNode[] = []

class MessageManager {
  private container: HTMLElement | null = null

  constructor() {
    this.container = document.createElement('div')
    this.container.className = 'message-container'
    document.body.appendChild(this.container)
  }

  private render() {
    const vnodes = instances.map((instance, index) => {
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
      this.container.className = 'message-container'
      document.body.appendChild(this.container)
    }
    render(transitionGroup, this.container)
  }

  add(options: MessageOptions) {
    const id = `message_${seed++}`
    const vnode = createVNode(
      MessageComponent,
      {
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
  success: (content: string, duration = 3000) => {
    return manager.add({ type: 'success', content, duration })
  },
  error: (content: string, duration = 3000) => {
    return manager.add({ type: 'error', content, duration })
  },
  warning: (content: string, duration = 3000) => {
    return manager.add({ type: 'warning', content, duration })
  },
  info: (content: string, duration = 3000) => {
    return manager.add({ type: 'info', content, duration })
  },
}
