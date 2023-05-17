<script lang="ts">
import {App, Page, Navbar, Block, BlockTitle, Card, ListInput, List, Button, Link} from 'konsta/vue';
import {Person, Lock} from 'framework7-icons/vue/framework7-icons-vue.js';

export default {
  components: {
    App,
    Page,
    Navbar,
    Block,
    BlockTitle,
    Card,
    ListInput,
    List,
    Button,
    Link,
    Person,
    Lock,
  },

};
</script>

<template>
  <App theme="ios" safe-areas>
    <Page>
      <div class="flex justify-center items-center h-screen">
        <div class="w-full lg:max-w-sm">
          <Card
              raised-ios
              raised
          >
            <template #footer>
              <div class="flex justify-center space-x-2 rtl:space-x-reverse mb-1">
                <div>
                  Don’t have an account yet ?
                </div>
                <Link href="https://google.com" target="_blank" class="font-medium hover:underline">Sign up</Link>
              </div>
              <div class="flex justify-center space-x-2 rtl:space-x-reverse">
                <div>
                  Forgot your password ?
                </div>
                <Link href="https://google.com" target="_blank" class="font-medium hover:underline">Reset it here</Link>
              </div>
            </template>

            <ListInput
                outline-ios
                component="div"
                label="E-mail"
                type="email"
                placeholder="Enter your e-mail"
            >
              <template #media>
                <Person class="w-6 h-6"/>
              </template>
            </ListInput>

            <ListInput
                outline-ios
                component="div"
                label="Password"
                type="password"
                placeholder="Enter your password"
            >
              <template #media>
                <Lock class="w-6 h-6"/>
              </template>
            </ListInput>

            <Button
                large
                touch-ripple
                rounded
                class="mt-5"
            >
              Sign In
            </Button>

          </Card>


        </div>
      </div>
    </Page>
  </App>
</template>

<style scoped>

</style>
