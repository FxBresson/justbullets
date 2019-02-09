import { StyleSheet } from 'react-native'

const colors = {
  check: '#72ffcb',
  disabled: '#E4E4E4',
}

const commons = StyleSheet.create({
  paddingPage: {
    padding: 24,
  },
  button: {
    margin: 4,
    borderRadius: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
})

const button = StyleSheet.create({
  check: {
    backgroundColor: colors.check,
  },
  round: {
    width: 40,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
  wrapper: {
    width: '33%',
  },
})

const checkbox = StyleSheet.create({
  default: {
    borderRadius: 50,
    height: 30,
    // width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    backgroundColor: 'white',
    borderColor: '#AAAAAA',
    borderWidth: 1,
  },
  round: {
    width: 30,
  },
  check: {
    backgroundColor: colors.check,
    borderColor: colors.check,
  },
  text: {
    fontWeight: '700',
    color: '#AAAAAA',
  },
  textCheck: {
    color: 'white',
  },

  toggle: {
    width: 20,
    height: 20,
  },
  toggleCheck: {
    borderColor: 'white',
    backgroundColor: 'white',
  },
  toggleWrapper: {
    width: 50,
    alignItems: 'flex-start',
  },
  toggleWrapperCheck: {
    alignItems: 'flex-end',
  },
})

export { commons, button, checkbox }
