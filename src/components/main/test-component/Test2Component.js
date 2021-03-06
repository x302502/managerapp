import React, { Component } from 'react'
import { View } from 'react-native'
import { Form, Item, Label, Input,IconNB } from 'native-base';
import { ColorsChart, Color } from '../../../common/Color';

export default class Test2Component extends Component {
  render() {
    return (
      <View>
        <Form style ={{marginLeft:-10}}>
            <Item floatingLabel style ={{backgroundColor: Color.backGroundAlpha06}} >
              <Label style={{color:Color.smartlog}}>Username</Label>
              <Input value ='heheheehhe' disabled />
            </Item>
            <Item success>
              <Input placeholder="Textbox with Success Input" />
              <IconNB name="ios-checkmark-circle" />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:Color.smartlog}}>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
      </View>
    )
  }
}