<template>
    <aside class="w-64 flex-shrink-0 bg-white shadow">
        <ul class="py-4">
            <li v-for="item in menu" :key="item.id">
                <router-link
                    :to="item.route"
                    class="flex items-center p-4 hover:bg-gray-100"
                >
                    <span class="mr-4">
                        <i :class="item.icon" />
                    </span>
                    <span class="text-gray-800">{{ item.label }}</span>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BaseSidebar",
    props: {
        menu: {
            type: Array,
            required: true,
        },
    },
});
</script>
