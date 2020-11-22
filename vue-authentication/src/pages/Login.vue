<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Login {{ firstName }}</h3>
                    <hr />
                </div>
                <form @submit.prevent="onLogin()">
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="email"
                        />
                        <div class="error" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                        />
                        <div class="error" v-if="errors.password">
                            {{ errors.password }}
                        </div>
                    </div>

                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import SignupValidations from '../services/SignupValidations';
export default {
    data() {
        return {
            email: '',
            password: '',
            errors: [],
        };
    },
    methods: {
        onLogin() {
            let validations = new SignupValidations(
                this.email,
                this.password,
            );

            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            }

            //signup registration
        },
    },
};
</script>
