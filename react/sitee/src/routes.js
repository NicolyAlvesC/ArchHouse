import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/home.index';
import Entrada from './pages/entrda/entrada.index';

export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Entrada/>}/>
                <Route path='/homepage'  element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    )
}