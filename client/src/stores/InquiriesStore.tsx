import {sleep} from '@/lib/utils';
import ToastService from '@/services/Toast';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';

export function useInquiries() {
  return useQuery({
    queryKey: ['inquiries'],
    queryFn: async () => {
      const response = await fetch('/api/inquiries');
      if (!response.ok) throw new Error('Network response was not ok');
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
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.inquiries;
    },
  });
}

export function useAddInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newInquiry) => {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newInquiry),
      });
      if (!response.ok) throw new Error('Failed to add inquiry');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['inquiries']);
      ToastService.info('Succesfully added inquiry');
    },
  });
}

export function useUpdateInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`/api/inquiries/${data.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update inquiry');
      return response.json();
    },
    onSuccess: ({inquiries}) => {
      queryClient.invalidateQueries(inquiries.id);
      ToastService.info('Succesfully updated inquiry');
    },
  });
}

export function useRemoveInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (inquiryId) => {
      const response = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete inquiry');
      return response.json();
    },
    onSuccess: () => {
      //TODO This is wrong
      queryClient.invalidateQueries(['inquiries']);
      ToastService.info('Succesfully deleted inquiry');
    },
  });
}
