export function useForm<T extends object>(defaultValues: T) {
  const getDefaultValues = () => structuredClone(defaultValues);
  const form = ref(getDefaultValues());

  function reset() {
    form.value = getDefaultValues();
  }

  return {
    form,
    reset,
  };
}
