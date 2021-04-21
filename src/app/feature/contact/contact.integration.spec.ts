import { render, screen } from '@testing-library/angular'
import { SpectacularAppComponent, SpectacularFeatureTestingModule } from '@ngworker/spectacular'
import { ContactModule } from './contact.module'
import { CONTACT_PATH } from './contact.contstants'

describe('contact feature integration', () => {
  it('shows Chau', async () => {
    // Arrange
    const { navigate } = await render(SpectacularAppComponent, {
      excludeComponentDeclaration: true,
      imports: [
        SpectacularFeatureTestingModule.withFeature({
          featureModule: ContactModule,
          featurePath: CONTACT_PATH,
        }),
      ],
    })
    // Act
    await navigate(CONTACT_PATH)
    // Assert
    expect(() => screen.getByRole('link', { name: 'Chau' })).not.toThrow()
    expect(() => screen.getByRole('link', { name: 'Lars' })).toThrow()
  })
})
