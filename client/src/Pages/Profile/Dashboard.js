import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
        <div className='profile-card-container'>
          <img id="profile-image" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
          <h2>Profile name</h2>
          <div className='profile-info-container'>
            <hr/>
            <h4 className='profile-info'>Gender : Female</h4>
            <hr/>
            <h4 className='profile-info'>DOB : 22/34/2343</h4>
            <hr/>
            <h4 className='profile-info'>Contact : 023974309874</h4>
            <hr/>
          </div>
        </div>
        <div class="double-container">
          <div className='blood-group'>
            <h3>Blood Group</h3>
            <div className='inner-circle'><h4>O⁺</h4></div>
          </div>
          <div className='age-container'>
            <h3>Age</h3>
            <div className='inner-circle'><h4>68</h4></div>
          </div>
        </div>
        <div className='prescription-container'>
          
          <ul className='prescription-list'>
          Recent Prescription
            <li className='prescription-item'>
              <h2>Medicine</h2>
              <h2>Dose Per Day</h2>
            </li>
            <hr/>
            <li className='prescription-item'>
              <h3>Medicine 1</h3>
              <h3>3</h3>
            </li>
            <hr/>
            <li className='prescription-item'>
              <h3>Medicine 1</h3>
              <h3>3</h3>
            </li>
            <hr/>
            <li className='prescription-item'>
              <h3>Medicine 1</h3>
              <h3>3</h3>
            </li>
            <hr/>
            <li className='prescription-item'>
              <h3>Medicine 1</h3>
              <h3>3</h3>
            </li>
            <hr/>
            <li className='prescription-item'>
              <h3>Medicine 1</h3>
              <h3>3</h3>
            </li>
            <hr/>
            </ul>
        </div>
        <div className='med-history-container'>
          <ul className='med-history-list'>
          Medical History
          <li className='med-history'>
            <h3>By: Dr. Hariram</h3>
            <h3>Dated: 12/03/2011</h3>
            <h3>Issue: Stomach Pain</h3>
          </li>
          <hr/>
          <li className='med-history'>
            <h3>By: Dr. Hariram</h3>
            <h3>Dated: 12/03/2011</h3>
            <h3>Issue: Stomach Pain</h3>
          </li>
          <hr/>
          <li className='med-history'>
            <h3>By: Dr. Hariram</h3>
            <h3>Dated: 12/03/2011</h3>
            <h3>Issue: Stomach Pain</h3>
          </li>
          <hr/>
          <li className='med-history'>
            <h3>By: Dr. Hariram</h3>
            <h3>Dated: 12/03/2011</h3>
            <h3>Issue: Stomach Pain</h3>
          </li>
          <hr/>
          <li className='med-history'>
            <h3>By: Dr. Hariram</h3>
            <h3>Dated: 12/03/2011</h3>
            <h3>Issue: Stomach Pain</h3>
          </li>
          <hr/>
          </ul>
        </div>
    </div>
  )
}

export default Dashboard;