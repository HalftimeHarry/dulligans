<script>
    import {isOverlayOpenType} from "../routes/store"

</script>
<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
    <div class="bg-blue-100 text-white rounded-md px-8 py-10 relative max-w-lg">
        <button class="absolute top-2 right-3 text-4xl text-grey-300
        hover:-translate-y-0.5 translate-transform"
        on:click={() => isOverlayOpenType.set(false)}>&times;</button>
        <slot/>
    </div>
</div>