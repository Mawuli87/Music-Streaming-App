import AppButton from '@ui/AppButton';
import {useFormikContext} from 'formik';
import {FC} from 'react';
import {StyleSheet, Button, GestureResponderEvent} from 'react-native';

interface Props {
  title: string;
  onPress?: Function;
}

const SubmitBtn: FC<Props> = props => {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton
      onPress={handleSubmit as (e?: GestureResponderEvent) => void}
      title={props.title}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SubmitBtn;
