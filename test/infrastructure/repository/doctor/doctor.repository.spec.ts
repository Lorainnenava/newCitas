// import { Test, TestingModule } from '@nestjs/testing';
// import { getModelToken } from '@nestjs/mongoose';
// import { DoctorRepository } from '../../../../src/infrastructure/repository/doctor/doctor.repository';
// import { Doctor } from '../../../../src/domain/entities/doctor/doctor.entity';
// import { DoctorRequestDto } from '../../../../src/domain/dtos/doctor/request/doctorRequest.dto';
// import { DoctorResponseDto } from '../../../../src/domain/dtos/doctor/response/doctorResponse.dto';

// describe('DoctorRepository', () => {
//   let doctorRepository;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         DoctorRepository,
//         {
//           provide: getModelToken(Doctor.name),
//           useValue: {
//             new: jest.fn().mockResolvedValue({ save: jest.fn() }),
//             // find: jest.fn(),
//             // findOne: jest.fn(),
//             // findByIdAndUpdate: jest.fn(),
//             // findByIdAndDelete: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     doctorRepository = module.get<DoctorRepository>(DoctorRepository);
//   });

//   it('should be defined', () => {
//     expect(doctorRepository).toBeDefined();
//   });

//   describe('create', () => {
//     it('should create a doctor', async () => {
//       const doctorDto =
//         new DoctorRequestDto(/* inicializa con valores de prueba */);
//       const createdDoctor =
//         new DoctorResponseDto(/* inicializa con valores de prueba */);

//       // Configura el mock para devolver el doctor creado cuando se llama a `save`.
//       doctorRepository.doctorModel.new.mockResolvedValue({
//         save: jest.fn().mockResolvedValue(createdDoctor),
//       });

//       const result = await doctorRepository.create(doctorDto);

//       expect(result).toEqual(createdDoctor);
//       expect(doctorRepository.doctorModel.new).toHaveBeenCalledWith(doctorDto);
//       expect(doctorRepository.doctorModel.new().save).toHaveBeenCalled();
//     });
//   });

//   // Aquí puedes agregar tus pruebas para los métodos create, getAll, findOne, update y delete
// });
