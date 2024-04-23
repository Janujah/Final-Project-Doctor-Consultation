import React from 'react'
import logo from '../Components/logo.png'

function login() {
    return (
        <div>
            <section class="vh-100 gradient-custom" id='login'>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white" id='login-1' >
                                <div class="card-body p-5 text-center" id='login-form'>

                                    <div class="mb-md-5 mt-md-4 pb-5">
                                        <img src={logo} alt='logo' id='login-img' />

                                        <h2 class="fw-bold mb-2 text-uppercase" id='login-login'>Login</h2>
                                        <p class="text-black-50 mb-5">Welcome you back</p>

                                        <div data-mdb-input-init class="form-outline form-white mb-4">
                                            <label class="form-label" for="typeEmailX">Email or User Name</label>
                                            <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Enter your Email or User name' />
                                        </div>

                                        <div data-mdb-input-init class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='..........' />
                                        </div>
                                        
                                        <p class="small mb-5 pb-lg-2"><a class="text-blue-50" href="/FP">Forgot password?</a></p>

                                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" id='login-btn' type="submit" style={{ backgroundColor: '#110942' }}>Login</button>

                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" class="text-black"><i class="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa- fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" class="text-black"><i class="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p class="mb-0">Don't have an account? <a href="/Signup" class="text-blue-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br></br><br></br>
        </div>
    )
}

export default login
