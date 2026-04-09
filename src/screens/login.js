/*
 * Copyright (c) 2024 - 2025 Ping Identity Corporation. All rights reserved.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { Link } from '@react-navigation/native';
import { Center, Heading, Text, useToken } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FRStep, Config } from '@forgerock/javascript-sdk';
import { DEBUGGER_OFF,API_BASE_URL } from '../../.env';

import Form from '../components/journey/form';




export default function Login() {
  const [primary] = useToken('colors', ['primary.600']);
  const linkStyle = {
    color: primary,
    textDecorationLine: 'underline',
  };
function addHeadersMiddleware(req, action, next) {
  if (DEBUGGER_OFF) debugger;

  if (AUTH_HEADER_ACTIONS.has(action.type) && req.init.headers instanceof Headers) {
    const h = req.init.headers;
    h.append('Locale', 'EN-SA');
    h.append('Chnl-CountryCode', 'SA');
    h.append('Chnl-Group-Member', 'SABB');
    h.append('request_type', 'REG');
    h.append('Transaction-Type', 'MB_Login');
    h.append('channel', 'MOB');
    h.append('Latitude', '17.521898');
    h.append('Longitude', '78.3208919');
    h.append('Src-Device-Id', '03f1223469e6d29d');
    h.append('device-status', '');
    h.append('Consumer-Id', 'LOGON');
    h.append('Request-Correlation-Id', 'bb003f6d-91c0-4415-8320-bfe76868ecb6');
    h.append('x-forgerock-transactionid', 'OHMdc2a0e26beb75e1aab1ca41b8d76d');
    h.append('pref_language', 'EN');
    h.append('Global-Channel-Id', 'OHM');
    h.append('GBGF', 'RBWM');
    h.append('Accept', '-Language=EN');
    h.append('IPAddress', '124.123.140.218');
  }
next();
}


  Config.set({
    serverConfig: {
      baseUrl: API_BASE_URL,
    },
    middleware: [addHeadersMiddleware],
  });


  return (
    <Form
      action={{ type: 'login' }}
      bottomMessage={
        <Center>
          <Text mt={2}>
            {"Don't have an account?"}{' '}
            <Link to={{ screen: 'Sign Up' }} style={linkStyle}>
              Register
            </Link>
          </Text>
        </Center>
      }
      mb={4}
    >
      <Center>
        <Icon name="key" size={72} color="#c0c9d5" />
        <Heading size="lg" mb={4}>
          Sign In
        </Heading>
      </Center>
    </Form>
  );
}
