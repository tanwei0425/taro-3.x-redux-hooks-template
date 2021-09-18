import { Component } from 'react'
import { Provider } from 'react-redux'
import stores from '@/stores'
import AxiosRequestProvider from '@/components/AxiosRequestProvider';
import '@/assets/custom-variables.scss'
import '@/app.less'

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {
    return <Provider store={stores}>
      <AxiosRequestProvider>
        {this.props.children}
      </AxiosRequestProvider>
    </Provider>
  }
}

export default App
