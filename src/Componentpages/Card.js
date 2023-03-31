import React from "react"


export default function Card(props){
 const {price,user,storage}=props
 return (
<div class="col-lg-4 mb-5">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
              <h6 class="card-price text-center">${price}<span class="period">/month</span></h6>
              <hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{user}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>{storage}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                  Private Projects</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                  Phone Support</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
                </li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                  Reports
                </li>
              </ul>
              <div class="d-grid">
                <button  class="btn btn-primary text-uppercase">Button</button>
              </div>
            </div>
          </div>
        </div>

            
 )   
}