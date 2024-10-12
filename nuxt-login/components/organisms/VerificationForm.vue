<template>
    <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/40 text-white backdrop-blur">
      <div class="relative -mt-20 flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-1 backdrop-blur transition-all duration-300">
        <div class="pointer-events-none absolute inset-0 opacity-70">
          <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
          <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
          <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
        </div>
        <div class="relative z-10 h-full p-5 text-13">
          <div class="flex flex-col items-center px-6 pt-8">
            <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="mb-2 h-24 w-24 rounded object-cover">
            <div class="mb-4 text-lg font-semibold">mentu mentu</div>
            <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
            <div class="mb-20 text-center text-white/70">
              Please enter below the 6-digit code we sent you through your registration e-mail:
            </div>
            <CodeInput />
            <div class="mb-24 flex w-full justify-center">
              <div class="flex cursor-pointer items-center justify-center text-xs transition-all">
                <div class="text-white/50">You didn't receive any mail?</div>
              </div>
            </div>
            <Button color="bg-black text-white">Enter</Button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CodeInput from '@/components/molecules/VerificationInput.vue';
  import Button from '@/components/atoms/Button.vue';
  
  export default {
    components: {
      CodeInput,
      Button,
    },
  };
  </script>
  