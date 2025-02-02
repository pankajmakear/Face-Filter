import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzMzMzc1OTY3LCJzdWIiOiIyM2U5NWFlZS0yNTRlLTRhYmYtYTk2MS1lNzBhOTNhZjRiM2N-U1RBR0lOR35jZTc4MmNjNC0zOGEwLTQ3YmUtOTU5NC00MjE4YWJlYjZkMzYifQ.5GMvAjVQ8v2dmDhps1OWei4rxn0Ba0jCnEhth9M7RiA',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    'e96f74b1-e014-4810-bed1-11bd49916a03',
    'ba31da6f-8bda-4b19-9ea7-ca7ff23e9931'
  );

  await session.applyLens(lens);
})();