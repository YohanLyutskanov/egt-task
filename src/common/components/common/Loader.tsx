import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

const antIcon = <LoadingOutlined style={{fontSize: 72}} spin/>;

export const Loader = () => <Spin indicator={antIcon}/>;
