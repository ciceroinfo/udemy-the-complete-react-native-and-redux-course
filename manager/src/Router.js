import React from 'react';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor: '#F7F7F7' }}>

      <Scene key="modal" component={Modal}>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" />
          </Scene>

          <Scene key="main">
            <Scene
              key="employeeList"
              component={EmployeeList}
              title="Employee List"
              onRight={() => Actions.employeeCreate()}
              rightTitle="Add"
              initial
            />

            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Employee Create"
              onLeft={() => Actions.employeeList()}
              leftTitle="Back"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
