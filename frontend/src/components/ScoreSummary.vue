<template>
    <section class="summary-section">
        <div class="summary-container">
            <ul>
                <score-preview
                    v-for="(score, idx) in scores" 
                    :key="idx"
                    :score="score"/>
            </ul> 
            <button class="continue" @click="$emit('resumeGame')">Continue</button>
        </div>

    </section>
</template>


<script>

import ScorePreview from '@/components/ScorePreview'

export default {


    props: {
        scores: Array
    },
 
    components: {
        ScorePreview
    }
}
</script>

<style scopped lang="scss">

.summary-section {
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.447);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.summary-container {
    width: 70%;
    height: 70%;
    margin: 100px 12vw;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.747);
    z-index: 2;
    display: flex;
    flex-direction: column;
    border-radius: 3%;
    
    button {
        border-radius: 7%;
        position: block;
        background-color: #339dff;
        border: none;
        padding: 15px;
        color: white;
        cursor: pointer;
    }


}


</style>
