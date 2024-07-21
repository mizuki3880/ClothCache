package ClothCache;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<users, Long> {
	users findByEmail(String email);
}
