<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My name is: {{ name }}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name" 
                    @hello="name = $event"
                    :resetFn="resetName"
                    :userAge="age">
                    </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>
 
<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Simon',
                age: 27
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.name = 'Jojo';
            },
            reset() {
                console.log('lel');
            },
            reset(event) {
                console.log(event);
            },
            resetName() {
                this.name = "kekname"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
