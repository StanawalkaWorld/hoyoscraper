<script setup lang="ts">
interface AlertProps {
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
}

const props = defineProps<AlertProps>();

const coloring = (): string[] => {
    if (props.danger) return ["border", "bg-rose-500", "border-rose-700"];
    if (props.warning)
        return ["border", "bg-amber-400", "border-amber-600", "text-black"];
    if (props.success)
        return [
            "border",
            "bg-emerald-400",
            "bordrer-emerald-700",
            "text-black",
        ];

    return ["border", "bg-sky-400", "border-sky-700", "text-black"];
};

const alertStyles = computed<string[]>(() => {
    const result = coloring();

    return [...result, "border", "p-6", "rounded-md"];
});
</script>

<template>
    <div :class="alertStyles"></div>
</template>
