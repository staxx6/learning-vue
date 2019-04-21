<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
        <button @click="childNameChange">Change name again</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default  {

        props: {
            name: {
                type: String,
                required: true,
                // default: 'Muster' 
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            childNameChange() { // parent not changing!
                this.name = "Evoli"; 
            },
            resetName() {
                //this.name = 'Simon'; // ref and primitv types
                this.$emit('hello', "Simon2");
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
