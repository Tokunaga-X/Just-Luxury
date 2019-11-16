<template>
  <div class="intro">
    <h1>我们是谁？ 我们是你的奢侈品向导，这里有着你对奢华的所有想象。</h1>
    <ul class="cards">
      <li class="card1">
        <img src="../assets/introHouse.jpg" alt />
        <div class="front">
          <h2>Fancy House</h2>
          <p>
            We have the most incredible houses in the world for sale. You will
            find you dream house here, for sure.
          </p>
        </div>
      </li>
      <li class="card2">
        <img src="../assets/introCar.jpg" alt />
        <div class="front">
          <h2>Insane Car</h2>
          <p>
            We have the most incredible cars in the world for sale. You will
            find you dream house here, for sure.
          </p>
        </div>
      </li>
      <li class="card3">
        <img src="../assets/introBoat.jpg" alt />
        <div class="front">
          <h2>Fantastic Boat</h2>
          <p>
            We have the most incredible boats in the world for sale. You will
            find you dream house here, for sure.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "intro"
};
</script>

<style lang="scss">
.intro {
  width: 100vw;
  height: 100%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 5rem;
    width: 80%;
  }
  .cards {
    list-style: none;
    width: 90%;
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-gap: 2rem;
    .card1,
    .card2,
    .card3 {
      flex: 1;
      height: 65vh;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: white;
      h2 {
        transform: translateY(0%);
        opacity: 1;
        font-size: 3rem;
        @media screen and (max-width: 1260px) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 1000px) {
          font-size: 3.5rem;
        }
      }
      p {
        transform: translateY(100%);
        transition: all 0.2s ease-in-out;
        opacity: 0;
        font-size: 1.5rem;
        width: 80%;
        margin: 3rem auto;
      }
      &:hover {
        h2 {
          transform: translateY(50%);
          opacity: 0;
          transition: all 0.1s ease-in-out;
        }
        p {
          transform: translateY(50%);
          opacity: 1;
        }
      }
    }
    .card1,
    .card2,
    .card3 {
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(1, 1, 1, 0.2);
      }
      .front {
        z-index: 1;
      }
    }
  }
}
</style>
