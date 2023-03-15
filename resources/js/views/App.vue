<template>
    <BaseLayout :menu="menu">
        <template #header>
            <h1>My App</h1>
        </template>
        <p>Welcome to my app!</p>
    </BaseLayout>
</template>

<script>
import { defineComponent } from "vue";
import BaseLayout from "../layouts/BaseLayout.vue";

export default defineComponent({
    name: "App",
    components: {
        BaseLayout,
    },
    data() {
        return {
            menu: [
                {
                    id: 1,
                    label: "Home",
                    icon: "fa fa-home",
                    route: "/",
                },
                {
                    id: 2,
                    label: "About",
                    icon: "fa fa-info-circle",
                    route: "/about",
                },
                // Add more menu items here...
            ],
        };
    },
});
</script>
