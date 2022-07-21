<script setup lang="ts">
interface AlertProps {
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    active?: boolean;
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

    return ["border", "bg-sky-600", "border-sky-800"];
};

const alertStyles = computed<string[]>(() => {
    const result = coloring();

    return [...result];
});
</script>

<template>
    <Transition name="squash" mode="in-out">
        <div
            :class="[
                alertStyles,
                'border',
                'p-4',
                'lg:rounded-md',
                'text-lg',
                'fixed',
                'bottom-0 lg:bottom-5',
                'w-full lg:w-1/3',
            ]"
            v-if="active"
        >
            <slot />
        </div>
    </Transition>
</template>
