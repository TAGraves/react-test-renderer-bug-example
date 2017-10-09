import React, { Component } from 'react';
import { View } from 'react-native';
import TestRenderer from 'react-test-renderer';

test('React Native findAllByProps', () => {
  const instance = TestRenderer.create(<View testID="view" />);
  expect(instance.root.findAllByProps({ testID: 'view' }).length).toEqual(1);
});

test('React DOM findAllByProps', () => {
  const instance = TestRenderer.create(<div testID="view" />);
  expect(instance.root.findAllByProps({ testID: 'view' }).length).toEqual(1);
});
