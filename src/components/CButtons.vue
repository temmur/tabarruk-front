<template>
  <button
      class="group"
  :class="['relative inline-flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95 font-semibold',
  variantClasses,

  buttonClass
  ]"
  >
<span
:class="['absolute inset-0 rounded-lg p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100',
gradientClasses
]"
></span>
    <span
    :class="['relative z-10 flex items-center space-x-2 px-4 py-2 rounded-lg',
    innerBgClasses
    ]"
    >
<slot name="prefix"></slot>
      <slot>
        {{text}}
      </slot>
      <slot name="suffix"></slot>
    </span>
  </button>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  text:{type:String, default:''},
  variant:{type:String, default:'blue'},
  buttonClass:{type:String, default:''},
})

const variants ={
  blue:{
    bg:'bg-gray-800',
    inner:'bg-gray-950',
    gradient:'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500'
  },
  red:{
    bg:'bg-red-300',
    inner:'bg-red-500',
gradient:'bg-gradient-to-r from-red-500 via-pink-500 to-rose-500'
  },
}

const variantClasses = computed(() =>variants[props.variant]?.bg || variants.blue.bg)
const innerBgClasses = computed(() =>variants[props.variant]?.inner || variants.blue.inner)
const gradientClasses = computed(() =>variants[props.variant]?.gradient || variants.blue.gradient)

</script>