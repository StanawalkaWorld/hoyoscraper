<script lang="ts" setup>
interface ButtonProps {
    primary?: boolean;
    outlined?: boolean;
    small?: boolean;
    prominent?: boolean;
}
const props = defineProps<ButtonProps>();
const emits = defineEmits<{
    (e: "click", event: MouseEvent);
}>();

const bgColor = (): string => {
    if (props.outlined) return "bg-transparent";
    if (props.primary) return "bg-[#5C0FF5]";

    return "bg-slate-700";
};

const borders = (): string => {
    const result: string = props.outlined ? "border-2" : "border-0";

    if (props.primary) return `${result} border-[#5C0FF5]`;

    return `${result} border-slate-700`;
};

const margins = (): string => {
    if (props.small) return "px-2 py-1 text-sm";
    if (props.prominent) return "px-6 py-4 text-lg";

    return "px-4 py-2";
};

const btnStyle = computed<string[]>(() => {
    return [bgColor(), margins(), "rounded-md"];
});
</script>

<template>
    <button :class="btnStyle" @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>
