<template>
  <BaseForm>
    <BaseFormHeader>      
      <BaseFormTitle>Login</BaseFormTitle>
      <BaseFormDescription>Enter credentials below.</BaseFormDescription>
    </BaseFormHeader>
    <BaseFormFields>
      <BaseField>
        <BaseFieldLabel :for="INPUT_USERNAME_ID" autocomplete="username">Username</BaseFieldLabel>
        <BaseInputText :id="INPUT_USERNAME_ID" :name="INPUT_USERNAME_ID" />
      </BaseField>
      <BaseField>
        <BaseFieldLabel :for="INPUT_PASSWORD_ID" autocomplete="current-password">Password</BaseFieldLabel>
        <BaseInputPassword :id="INPUT_PASSWORD_ID" :name="INPUT_PASSWORD_ID" />
      </BaseField>
    </BaseFormFields>
    <BaseFormActions>
      <BaseButtonPrimary class="grow">Login</BaseButtonPrimary>
    </BaseFormActions>
  </BaseForm>
</template>

<script setup lang="ts">
const INPUT_USERNAME_ID = 'username';
const INPUT_PASSWORD_ID = 'password';
</script>