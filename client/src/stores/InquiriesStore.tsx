import i18next from 'i18next';
import { sleep } from '@/lib/utils';
import ToastService from '@/services/Toast';
import { newInquiry, updateInquiry } from '@/types/allTypes';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useInquiries() {
  return useQuery({
    queryKey: ['inquiries'],
    queryFn: async () => {
      const response = await fetch('/api/inquiries');
      if (!response.ok) {
        ToastService.error(i18next.t('Toast.error.fetch.title'), i18next.t('Toast.error.fetch.message'));
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data?.inquiries ?? [];
    },
  });
}

export function useInquiry(inquiryId: string) {
  return useQuery({
    queryKey: ['inquiry', inquiryId],
    queryFn: async () => {
      const response = await fetch(`/api/inquiries/${inquiryId}`);
      await sleep(200);
      if (!response.ok) {
        ToastService.error(i18next.t('Toast.error.fetch.title'), i18next.t('Toast.error.fetch.message'));
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.inquiries;
    },
  });
}

export function useAddInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newInquiry: newInquiry) => {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInquiry),
      });
      if (!response.ok) throw new Error('Failed to add inquiry');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
      ToastService.info(i18next.t('Toast.success.add.title'), i18next.t('Toast.success.add.message'));
    },
    onError: () => {
      ToastService.error(i18next.t('Toast.error.add.title'), i18next.t('Toast.error.add.message'));
    },
  });
}

export function useUpdateInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: updateInquiry) => {
      const response = await fetch(`/api/inquiries/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update inquiry');
      return response.json();
    },
    onSuccess: ({ inquiries }) => {
      queryClient.invalidateQueries(inquiries.id);
      ToastService.info(i18next.t('Toast.success.update.title'), i18next.t('Toast.success.update.message'));
    },
    onError: () => {
      ToastService.error(i18next.t('Toast.error.update.title'), i18next.t('Toast.error.update.message'));
    },
  });
}

export function useRemoveInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (inquiryId: string) => {
      const response = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete inquiry');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
      ToastService.info(i18next.t('Toast.success.delete.title'), i18next.t('Toast.success.delete.message'));
    },
  });
}
