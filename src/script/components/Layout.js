import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class extends Component {
    render() {
        return ( 
        	<View>
	            <Text>Hello World</Text>
            </View>
        );
    }
}