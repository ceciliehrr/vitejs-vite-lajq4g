<template>
  <main class="pkt-container">
    <h1 class="pkt-txt-54">{{ randomH1 }}</h1>
    <p>{{ randomIngress }}</p>
    <p>
      {{ randomText }}
    </p>
        <button class="pkt-btn pkt-btn--icon-left">
      <svg class="pkt-btn__icon"><use href="#user"></use></svg>
      <span class="pkt-btn__text">CSS icon-left</span>
    </button>
    <p>Ønsker du andre farger på buttons kan du lage egne klasser til å legge til styling. Se vår dokumentasjon på buttons for hvilken farger som er anbefalt.</p>
    <button class="pkt-btn pkt-btn--label-only pkt-btn--primary">
      <span class="pkt-btn__text">CSS-knapp label only</span>
    </button>
    <br />

    </br>
    <pkt-button class="pkt-btn--yellow-stroke" skin="secondary" variant="icon-left" iconName="user"
      >Vue-knapp</pkt-button
    >

    <table class="pkt-table mt-size-20 mb-size-30">
      <thead>
        <tr>
          <th class="pkt-table__th">{{ column }}</th>
          <th class="pkt-table__th">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ celle }}</td>
          <td>{{ celle }}</td>
        </tr>
        <tr>
          <td>{{ celle }}</td>
          <td>{{ celle }}</td>
        </tr>
      </tbody>
    </table>

    <h2>{{ randomH2 }}</h2>
    <p>{{ randomIngress2 }}</p>
    <p>
      {{ randomText }}
    </p>

    <img :src="image" alt="cat" />
  </main>
</template>

<script>
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker@v7.4.0';

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      randomH1: faker.hacker.adjective(),
      randomH2: faker.hacker.adjective(),
      randomIngress: faker.hacker.phrase(),
      randomIngress2: faker.hacker.phrase(),
      randomText: faker.lorem.paragraphs(4),
      image: faker.image.cats(),
      column: faker.hacker.adjective(),
      celle: faker.hacker.ingverb(),
    };
  },
};
</script>

<style scoped></style>
