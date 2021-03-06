
//import './App.css';
import HomePage from './components/HomePage/HomePage';
import ExerciseHome from './components/ExercisePage/ExerciseHome';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import ExerciseGruop from './components/ExerciseGroup/ExerciseGruop';
import ExerciseFinish from './components/ExercisePage/ExerciseFinish';
import ExerciseRecording from './components/ExerciseRecording/ExerciseRecording';
import Mypage from './components/Mypage/Mypage';
import Managingfriend from './components/Managingfriend/Managingfriend';
import ManagingRoutin from './components/ManagingRoutin/ManagingRoutin';
import SettingAccount from './components/Mypage/SettingAccount/SettingAccount';
import GroupList from './components/GroupList/GroupList';
import GroupMain from './components/GroupMain/GroupMain';
import LoginPage from './components/LoginPage/LoginPage';
import ScheduleManageMent from "./components/ScheduleManageMent/ScheduleManageMent";
import Modal from "./components/ScheduleManageMent/Modal/Modal";
import AttendenceBook from "./components/ScheduleManageMent/AttendenceBook/AttendenceBook";
import StartPage from "./components/startPage/startPage";


import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/startPage" element={<StartPage />} />
                    <Route path="/exercise" exact element={<ExerciseHome/>}/>
                    <Route path="/exerciseGroup" exact element={<ExerciseGruop/>}/>
                    <Route path="/exerciseFinish" exact element={<ExerciseFinish/>}/>
                    <Route path="/exerciseRecording" exact element={<ExerciseRecording/>}/>
                    <Route path="/mypage" exact element={<Mypage/>}/>
                    <Route path="/manageFriend" exact element={<Managingfriend/>}/>
                    <Route path="/manageRoutin" exact element={<ManagingRoutin/>}/>
                    <Route path="/settingAccount" exact element={<SettingAccount/>}/>
                    <Route path="/groupList" exact element={<GroupList/>}/>
                    <Route path="/groupMain/:groupId" exact element={<GroupMain/>}/>
                    <Route path="/Login" exact element={<LoginPage/>}/>
                    <Route path="/scheduleManageMent" element={<ScheduleManageMent />}>
                        <Route path=":calenderID" element={<Modal />} />
                    </Route>
                    <Route path="/AttendenceBook" element={<AttendenceBook />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
