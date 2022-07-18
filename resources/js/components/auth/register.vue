<template>
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <input id="exampleInputFirstName" class="form-control"
                                               placeholder="Enter Full Name" type="text"/>
                                    </div>
                                    <div class="form-group">
                                        <input id="exampleInputEmail" aria-describedby="emailHelp" class="form-control"
                                               placeholder="Enter Email Address" type="email"/>
                                    </div>
                                    <div class="form-group">
                                        <input id="exampleInputPassword" class="form-control" placeholder="Password"
                                               type="password"/>
                                    </div>
                                    <div class="form-group">
                                        <input id="exampleInputPasswordRepeat" class="form-control"
                                               placeholder="Confirm Password" type="password"/>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-block" type="submit">Register</button>
                                    </div>
                                    <hr/>
                                </form>
                                <hr/>
                                <div class="text-center">
                                    <router-link to="/" class="font-weight-bold small">Already have an account?
                                    </router-link>
                                </div>
                                <div class="text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style></style>
