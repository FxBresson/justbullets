import React from 'react'
import { Button, View } from 'react-native'
import { compose } from 'recompose'
import { Formik } from 'formik'
import * as Yup from 'yup'
import makeInputGreatAgain, {
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik'
import { TextField } from 'react-native-material-textfield'
import { Dropdown as RNDropdown } from 'react-native-material-dropdown'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { addTracker } from '../action'
import BigTitle from '../components/BigTitle'

import { commons } from '../styles'

const Input = compose(
  makeInputGreatAgain,
  withNextInputAutoFocusInput,
)(TextField)
const Dropdown = compose(
  makeInputGreatAgain,
  withNextInputAutoFocusInput,
)(RNDropdown)
const Form = withNextInputAutoFocusForm(View)

const validationSchema = Yup.object().shape({
  title: Yup.string().required('need a title !'),
  goal: Yup.number('not a number').max(10, "le maximum c'est 10"),
  type: Yup.string().required('need a type !'),
  period: Yup.string().required('need a period !'),
})

class AddTracker extends React.Component {
  static navigationOptions = {
    title: 'Add Tracker',
  }
  submit = values => {
    this.props.addTracker(values)
    this.props.navigation.pop()
  }
  render = () => {
    // ajouter une key label pour changer le texte ecrit dans le dropdown
    const types = [{ value: 'normal' }, { value: 'mood' }, { value: 'bool' }]
    const period = [{ value: 'day' }, { value: 'week' }, { value: 'month' }]

    return (
      <View style={commons.paddingPage}>
        <Formik
          initialValues={{
            period: period[0].value,
            type: types[0].value,
          }}
          onSubmit={this.submit}
          validationSchema={validationSchema}
          render={props => {
            return (
              <Form>
                <Input label="Title" name="title" type="text" />
                <Dropdown label="Type" data={types} name="type" />
                <Dropdown label="Period" data={period} name="period" />
                {props.values.type === 'normal' && (
                  <Input
                    label="Goal"
                    name="goal"
                    type="number"
                    keyboardType="numeric"
                  />
                )}

                <Button onPress={props.handleSubmit} title="ADD" />
              </Form>
            )
          }}
        />
      </View>
    )
  }
}
const mapStateToProps = state => {
  return ({ trackers, today, history } = state)
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTracker,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTracker)
