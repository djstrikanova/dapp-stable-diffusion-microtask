<template>
  <section class="hero is-success is-fullheight">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image mx-auto" style="object-fit: contain; display: block; border-radius: 5px; width: 300px;">
          <img src="./../assets/images/bear.png" alt="">
          <!-- <img src="./../assets/images/dalle-shiba-magnifying-glass.png" alt=""> -->
        </figure>
        <br>
        <p class="title">
          Stable Diffusion Bounties
        </p>
        <hr>
        <section class="section">
          <p class="subtitle">
            Use the Effect Network Work-Force to create Stable Diffusion generated images for you.
          </p>
          <div class="columns">
            <div class="column box m-2 p-2">
              <div class="mt-3">
                <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="icon is-large m-1" />
              </div>
              <hr>
              <p>
                Create basic prompts and let the workers use their imagination trying to match it.
              </p>
            </div>
            <div class="column box m-2 p-2">
              <div class="mt-3">
                <font-awesome-icon icon="fa-solid fa-coins" class="icon is-large m-1" />
              </div>
              <hr>
              <p>
                <a href="https://effect.network/token-page" target="_blank" rel="noopener noreferrer" class="is-underlined">
                  <span>
                    Pay with EFX
                  </span>
                  <span class="icon is-medium">
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="icon is-small" />
                  </span>
                </a>
              </p>
            </div>
            <div class="column box m-2 p-2">
              <div class="mt-3">
                <font-awesome-icon icon="fa-solid fa-tags" class="icon is-large m-1" />
              </div>
              <hr>
              <p>
                The Work-Force will generate their take on your prompts.
              </p>
            </div>
            <div class="column box m-2 p-2">
              <div class="mt-3">
                <font-awesome-icon icon="fa-solid fa-images" class="icon is-large m-1"/>
              </div>
              <hr>
              <p>
                Download the images and use them as you wish.
              </p>
            </div>
          </div>
        </section>
        <hr>
        <section class="section">
          <p class="subtitle">
            Get started now!
          </p>
          <div class="buttons is-centered mx-auto" style="max-width: 500px;">
            <nuxt-link to="/create" class="button is-fullwidth is-primary is-light is-large mx-6 py-1">
              <span>
                Start
              </span>
              <span class="icon is-large">
                <font-awesome-icon icon="fa-solid fa-play" />
              </span>
            </nuxt-link>
            <nuxt-link to="/batch" class="button is-fullwidth is-primary is-light is-large mx-6 py-1">
              <span>
                Orders
              </span>
              <span class="icon is-large">
                <font-awesome-icon icon="fa-solid fa-list" />
              </span>
            </nuxt-link>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
