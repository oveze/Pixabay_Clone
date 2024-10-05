import './App.css';
import Images from './Pixabay/Images';
import Navbar from './Pixabay/Navbar';






function App() {
  
  return (
    <div>
      {/*<h1>This is My React App</h1>*/}
      
      <Navbar />
    <Images />
      
      
     {/* <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Aboutus />}/>
          <Route path='/Courses' element={<Course />}/>
          <Route path='/contactus' element={<Contactus />}/>
          <Route path='/Product' element={<Product />}/>
          <Route path="/Courses/:id" element={<Coursedetail />}/>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
        </Routes> */}
        
      
      
      {/* <Comments name = {faker.internet.displayName()}  timestamp={faker.date.anytime().toString()} commentText = {faker.lorem.sentence()}/>
      <Comments name = {faker.internet.displayName()} timestamp={faker.date.anytime().toString()}  commentText = {faker.lorem.sentence()}/>
      <Comments name = {faker.internet.displayName()} timestamp={faker.date.anytime().toString()}  commentText = {faker.lorem.sentence()}/>
      */}

      
    </div>

  );
}

export default App;
