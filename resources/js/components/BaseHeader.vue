<template>
    <header class="flex items-center justify-between p-4 bg-white shadow">
        <div>
            <img :src="icon" alt="Logo" class="w-8 h-8" />
        </div>
        <div>
            <slot />
        </div>
    </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BaseHeader",
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
});
</script>
