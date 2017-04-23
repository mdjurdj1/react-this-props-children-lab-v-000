import React from 'react'

export default class ThemedDecorations extends React.Component {
  render() {
    var currentTheme = this.props.theme
    var moddedChildred = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: currentTheme
      })
    })

    return (
      <div class="themedDeco">
      {moddedChildred}
      </div>
    )
  }
}
