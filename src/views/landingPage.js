import React, { Component } from 'react'

export default class landingPage extends Component {
    render() {
        return (
            <div>
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Covid-19 Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/app/contact">Helpline Numbers <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/app/notification">Notifications</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Beds available
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/app/hospitals">Hospitals</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/app/colleges">Colleges</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/app/tested">Comparison of tests</a>
      </li>
    </ul>
  
  </div>
</nav>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../../images/1.jpg" alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <strong class="text-danger font-italic" style={{ fontSize: "40px", fontFamily: "Times New Roman", backgroundColor: "black" }}>
                Check all the latest news and updates of COVID-19</strong>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../images/2.jpg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
            </div>
        )
    }
}
