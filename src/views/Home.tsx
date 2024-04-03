import {FC} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateNotification} from 'src/store/notification';

interface Props {}

const Home: FC<Props> = props => {
  const dispatch = useDispatch();

  const pushNoti = () => {
    dispatch(updateNotification({message: 'Just testing', type: 'success'}));
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Test" onPress={pushNoti} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
