<template>
    <div class="flex h-screen">
        <BaseSidebar :menu="menu" />
        <div class="flex-grow">
            <BaseHeader :icon="icon">
                <slot name="header" />
            </BaseHeader>
            <main class="p-4">
                <slot />
            </main>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseHeader from "../components/BaseHeader.vue";
import BaseSidebar from "../components/BaseSidebar.vue";

export default defineComponent({
    name: "BaseLayout",
    components: {
        BaseHeader,
        BaseSidebar,
    },
    props: {
        icon: {
            type: String,
            required: true,
        },
        menu: {
            type: Array,
            required: true,
        },
    },
});
</script>
