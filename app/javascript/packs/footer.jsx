import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div class="footer row">
      <div class="f1">
        <div class="row">
          <a href="#press">Press</a> | <a href="#academy">Academy</a> | <a href="#blog">Blog</a> | <a href="#support">Support</a>
        </div>
        <div class="row">
          <a href="#About">About</a> | <a href="#Careers">We are hiring</a>
        </div>
      </div>
      <div class="f2">
        <div class="row">
          <img src="assets/footer-logo.png" alt=""/>
        </div>
        <div class="row">
          SOCIAL ICONS HERE
        </div>
      </div>
      <div class="f3">
        <div class="row">
        <a href="#terms_pro">Pro Terms</a> | <a href="#Terms">Consumer Terms</a>
      </div>
      <div class="row">
        <a href="#Privacy">Privacy</a> | © Codefied Inc.
      </div>
      </div>
    </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    document.body.appendChild(document.createElement('div')),
  )
})
