<template>
  <main>
    <h1>backend testing playground</h1>
    <button @click="call">click me</button>
    <button @click="something">click me</button>
    <div v-for="todo in temp" :key="todo.id">
      <span>{{ todo.name }} </span>
      <span>{{ todo.status }}</span>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      temp: "",
    };
  },
  methods: {
    async call() {
      await fetch("http://localhost:3000", { method: "PATCH" })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.temp = response.todos;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async something() {
      const rawResponse = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "frorm backend test",
          description: "Textual content",
        }),
      });
      const content = await rawResponse.json();

      console.log(content);
    },
  },
};
</script>
