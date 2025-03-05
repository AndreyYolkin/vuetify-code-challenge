<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
        class="text-center"
      >
        <v-card>
          <v-card-text>
            <h1 class="text-h2 mb-6">
              404
            </h1>
            <p class="text-h5 mb-6">
              Oops! Page not found
            </p>
            <p class="mb-6">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <v-btn
              color="primary"
              to="/"
              variant="tonal"
              block
            >
              Back to Home
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<route lang="yaml">
  meta:
    layout: empty
</route>
