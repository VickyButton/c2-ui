<template>
  <BaseForm @submit.prevent="submitForm">
    <BaseFormHeader>      
      <BaseFormTitle>Login</BaseFormTitle>
      <BaseFormDescription>Enter credentials below.</BaseFormDescription>
    </BaseFormHeader>
    <BaseFormFields>
      <BaseField>
        <BaseFieldLabel :for="INPUT_USERNAME_ID" autocomplete="username">Username</BaseFieldLabel>
        <BaseInputText type="text" :id="INPUT_USERNAME_ID" :name="INPUT_USERNAME_ID" v-model="form.username" />
      </BaseField>
      <BaseField>
        <BaseFieldLabel :for="INPUT_PASSWORD_ID" autocomplete="current-password">Password</BaseFieldLabel>
        <BaseInputPassword :id="INPUT_PASSWORD_ID" :name="INPUT_PASSWORD_ID" v-model="form.password"  />
      </BaseField>
    </BaseFormFields>
    <BaseFormActions>
      <BaseButtonPrimary type="submit" class="grow">Login</BaseButtonPrimary>
    </BaseFormActions>
  </BaseForm>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', data: {
    username: string;
    password: string;
  }): void;
}>();

const INPUT_USERNAME_ID = 'username';
const INPUT_PASSWORD_ID = 'password';

const { form } = useForm({
  username: '',
  password: '',
});

function submitForm() {
  emit('submit', form.value);
}
</script>