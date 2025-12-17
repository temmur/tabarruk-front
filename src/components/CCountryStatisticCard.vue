  <template>
    <div class="size-max rounded-xl p-5 flex flex-col justify-between decoration-blue-50 border border-gray-500 backdrop-blur-md  bg-gray-600/20 text-2xl ">
      <p class="flex items-center gap-2  text-white">
        <i class="icon-mosque bg-red-500 p-2 rounded-md text-white"></i>
        {{statistic}} 222
      </p>
      <p class="text-gray-400">{{subTitle}} Diqqatga sazovor joylar</p>
    </div>
<!--    <div class="size-max rounded-md p-4 decoration-blue-50 border border-gray-500 backdrop-blur-md  bg-gray-600/20 relative -top-10 flex-[0.3]">-->
<!--      <p class="flex items-center gap-2">-->
<!--        <i class="icon-user-heart bg-red-500 p-2 rounded-md"></i>-->
<!--        {{statistic}} 175-->
<!--      </p>-->
<!--      <p>{{subTitle }} Aholi soni</p>-->

<!--    </div>-->



  </template>
  <script setup lang="ts">
  const props = defineProps<{
    icon?: string
    statistic: number
    subTitle?: string
  }>()
  </script>